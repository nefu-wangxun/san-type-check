import ts from 'typescript';
import path from 'path';
import { __dirname } from './utils/sys.js';

const fileName = path.resolve(__dirname(import.meta.url), './input.ts');
const program = ts.createProgram([fileName], {});
const printer = ts.createPrinter();

// ast
const sourceFile = program.getSourceFile(fileName);

// checker
const typeChecker = program.getTypeChecker();

// transform
const { transformed } = ts.transform(sourceFile, [

    // transformFactory
    function(context) {

        // transformer
        return function(node) {

            // changed node
            return ts.visitNode(node, visit);

            function visit(node) {
                if (ts.isTypeReferenceNode(node)) {
                    const type = typeChecker.getTypeFromTypeNode(node);
                    if (type.value) {
                        ts.addSyntheticTrailingComment(node, ts.SyntaxKind.SingleLineCommentTrivia, type.value);
                    }
                }
                return ts.visitEachChild(node, visit, context);
            }
        }
    }
]);

const code = printer.printNode(false, transformed[0], transformed[0]);
console.log(code);
