import * as Path from "path";
import { getBluehawk, System } from "../../bluehawk";
import { snip } from "./snip";

describe("snip", () => {
  beforeEach(getBluehawk.reset);
  beforeEach(System.useMemfs);

  it("generates correct RST snippets", async (done) => {
    const rootPath = Path.resolve("/path/to/project");
    const destinationPath = "/destination";
    const testFileName = "test.js";

    await System.fs.mkdir(rootPath, {
      recursive: true,
    });
    await System.fs.mkdir(destinationPath, {
      recursive: true,
    });
    await System.fs.writeFile(
      Path.join(rootPath, testFileName),
      `        // :code-block-start: foo
        const bar = "foo"
        // :emphasize-start:
        describe("some stuff", () => {
          it("foos the bar", () => {
            expect(true).toBeTruthy();
          });
        });
        // :emphasize-end:
        console.log(bar);
        // :code-block-end:
    `,
      {
        encoding: "utf8",
      }
    );

    await snip({
      paths: [rootPath],
      destination: destinationPath,
      state: undefined,
      ignore: undefined,
      format: "sphynx-rst",
      waitForListeners: true,
    });

    const destinationList = await System.fs.readdir(destinationPath);
    expect(destinationList).toStrictEqual([
      "test.codeblock.foo.js",
      "test.codeblock.foo.js.code-block.rst",
    ]);

    const fileContents = await System.fs.readFile(
      Path.join(destinationPath, "test.codeblock.foo.js.code-block.rst"),
      "utf8"
    );
    expect(fileContents).toStrictEqual(`.. code-block:: javascript
   :emphasize-lines: 2-6

   const bar = "foo"
   describe("some stuff", () => {
     it("foos the bar", () => {
       expect(true).toBeTruthy();
     });
   });
   console.log(bar);
`);
    done();
  });

  it("correctly logics multiple ranges within RST snippets", async () => {
    const rootPath = Path.resolve("/path/to/project");
    const destinationPath = "/destinationB";
    const testFileName = "test.js";

    await System.fs.mkdir(rootPath, {
      recursive: true,
    });
    await System.fs.mkdir(destinationPath, {
      recursive: true,
    });
    await System.fs.writeFile(
      Path.join(rootPath, testFileName),
      `// :code-block-start: foo
line 1
line 2
// :emphasize-start:
line 3
// :emphasize-end:
line 4
line 5 // :emphasize:
line 6
// :emphasize-start:
line 7
line 8
// :emphasize-end:
line 9
// :code-block-end:
`,
      {
        encoding: "utf8",
      }
    );

    const errors = await snip({
      paths: [rootPath],
      destination: destinationPath,
      state: undefined,
      ignore: undefined,
      format: "sphynx-rst",
      waitForListeners: true,
    });

    expect(errors).toStrictEqual(undefined);
    const destinationList = await System.fs.readdir(destinationPath);
    expect(destinationList).toStrictEqual([
      "test.codeblock.foo.js",
      "test.codeblock.foo.js.code-block.rst",
    ]);

    const fileContents = await System.fs.readFile(
      Path.join(destinationPath, "test.codeblock.foo.js.code-block.rst"),
      "utf8"
    );
    expect(fileContents).toStrictEqual(`.. code-block:: javascript
   :emphasize-lines: 3, 5, 7-8

   line 1
   line 2
   line 3
   line 4
   line 5 
   line 6
   line 7
   line 8
   line 9
`);
  });

  it("handles carriage returns", async () => {
    const text = `            //:code-block-start:foo
            var harrysStrat = realm.All<Guitar>().FirstOrDefault(\r
                g => g.Owner == "D. Gilmour"
                  && g.Make == "Fender"
                  && g.Model == "Stratocaster");

            realm.Write(() =>
            {
                harrysStrat.Price = 322.56;
            });
            //:code-block-end:

`;
    const rootPath = "/path/to/project";
    const destinationPath = "/carriageReturns";
    const testFileName = "test.js";

    await System.fs.mkdir(rootPath, {
      recursive: true,
    });
    await System.fs.mkdir(destinationPath, {
      recursive: true,
    });
    await System.fs.writeFile(Path.join(rootPath, testFileName), text, "utf8");

    const errors = await snip({
      paths: [rootPath],
      destination: destinationPath,
      waitForListeners: true,
    });

    expect(errors).toStrictEqual(undefined);
    const destinationList = await System.fs.readdir(destinationPath);
    expect(destinationList).toStrictEqual(["test.codeblock.foo.js"]);

    const fileContents = await System.fs.readFile(
      Path.join(destinationPath, "test.codeblock.foo.js"),
      "utf8"
    );
    expect(JSON.stringify(fileContents)).toStrictEqual(
      JSON.stringify(`var harrysStrat = realm.All<Guitar>().FirstOrDefault(\r
    g => g.Owner == "D. Gilmour"
      && g.Make == "Fender"
      && g.Model == "Stratocaster");

realm.Write(() =>
{
    harrysStrat.Price = 322.56;
});
`)
    );
  });
});
