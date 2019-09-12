// @ts-ignore
import * as Lint from "tslint";
// @ts-ignore
import * as ts from "typescript";

export class Rule extends Lint.Rules.AbstractRule {

   public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
      // @ts-ignore
      return this.applyWithWalker(new DocLibraryIncludesWalker(sourceFile, this.getOptions()));
   }
}

// The walker takes care of all the work.
class DocLibraryIncludesWalker extends Lint.RuleWalker {

   walk(node: ts.Node): void {
      ts.forEachChild(node, (child) => {
         if (child.jsDoc) {
            const tags = child.jsDoc[0].tags;

            let isLibary = false;
            let includes = new Set();
            if (tags) {

               tags.forEach(tag => {
                  if (tag.tagName.escapedText == 'library') {
                     isLibary = true;
                  }

                  if (tag.tagName.escapedText == 'include') {
                     // @ts-ignore
                     this.addFailure(this.createFailure(tag.getStart(), tag.getWidth(), 'Tag @include is not supported. Do you mean tag @includes?'));
                  }

                  if (tag.tagName.escapedText == 'includes') {
                     const parts = tag.comment.split(' ');
                     if (parts.length != 2) {
                        // @ts-ignore
                        this.addFailure(this.createFailure(tag.getStart(), tag.getWidth(), 'Tag @includes has incorrect format. Usage: @includes Alias ClassName'));
                     }
                     const canonizedTag = parts.join(' ');

                     if (isLibary && includes.has(canonizedTag)) {
                        // @ts-ignore
                        this.addFailure(this.createFailure(tag.getStart(), tag.getWidth(), `Tag @includes '${tag.comment}' is not unique in this library. Check all includes`));
                     }
                     includes.add(canonizedTag);
                  }
               })
            }
         }
      })
   }
}
