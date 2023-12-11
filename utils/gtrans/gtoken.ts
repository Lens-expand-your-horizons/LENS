export class GTokenAcquirer {
    tkk: string;
    host: string;
    RE_TKK = /tkk:'(.+?)'/s;
    RE_RAWTKK = /tkk:'(.+?)'/s;

    public constructor(tkk = '0', host = 'translate.google.com') {
        this.tkk = tkk;
        this.host = host.includes('http') ? host : `https://${host}`;
    }

    private async _update(): Promise<void> {
        const now = Math.floor(Date.now() / 3600000);
        if (this.tkk && parseInt(this.tkk.split('.')[0]) === now) {
            return;
        }

        const rawtkk = await fetch(this.host)
            .then((r) => r.text())
            .then((r) => [this.RE_TKK.exec(r), this.RE_RAWTKK.exec(r)])
            .catch((e) => console.error(e));

        if (!rawtkk) {
            throw new Error('Unable to fetch tkk');
        }

        if (rawtkk[0]) {
            this.tkk = rawtkk[0][1];
            return;
        }

        const code = rawtkk[1]![1];

        console.log(code);

        /*
        const tree = ast.parse(code);
        let visit_return = false;
        let operator = '+';
        let n = 0;
        const keys = { a: 0, b: 0 };
        for (const node of ast.walk(tree)) {
            if (node instanceof ast.Assign) {
                const name = node.targets[0].id;
                if (name in keys) {
                    if (node.value instanceof ast.Num) {
                        keys[name] = node.value.n;
                    } else if (node.value instanceof ast.UnaryOp
              && node.value.op instanceof ast.USub) {
                        keys[name] = -node.value.operand.n;
                    }
                }
            } else if (node instanceof ast.Return) {
                visit_return = true;
            } else if (visit_return && node instanceof ast.Num) {
                n = node.n;
            } else if (visit_return && n > 0) {
                if (node instanceof ast.Add) {
                    //
                } else if (node instanceof ast.Sub) {
                    operator = '-';
                } else if (node instanceof ast.Mult) {
                    operator = '*';
                } else if (node instanceof ast.Pow) {
                    operator = '**';
                } else if (node instanceof ast.BitXor) {
                    operator = '^';
                }
            }
        }
        const clause = compile(`${keys['a']}${operator}${keys['b']}`);
        const value = eval(clause);
        const result = `${n}.${value}`;
        this.tkk = result;
        */
    }

    public acquire(text: string): string {
        return text + '_token';
    }

    public do(text: string) {
        this._update();
        const tk = this.acquire(text);
        return tk;
    }
}
