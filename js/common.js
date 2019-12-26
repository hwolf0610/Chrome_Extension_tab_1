const insertNewDivSection = (layout, num) => {
    if (layout.type === 'child') {
        return {
            html: `<div class="${layout.name} grid-number">${num}</div>`,
            count: 1
        };
    }
    else if (layout.type === 'child1') {
        return {
            html: `<div class="${layout.name}"></div>`,
            count: 1
        };
    }
    else if (layout.type === 'parent2') {
        let res = {
            html: `<div class="${layout.name}">${num}`,
            count: 1
        };
        layout.children.forEach((lay, index) => {
            const rlt = insertNewDivSection(lay, num);
            res.html += rlt.html;
        });
        res.html += `</div>`;
        return res;
    }
    else if (layout.type === 'parent1') {
        let res = {
            html: `<div class="${layout.name}">`,
            count: 1
        };
        layout.children.forEach((lay, index) => {
            const rlt = insertNewDivSection(lay, num);
            res.html += rlt.html;
        });
        res.html += `</div>`;
        return res;
    }
    let res = {
        html: `<div class="${layout.name}">`,
        count: 0
    };
    layout.children.forEach((lay, index) => {
        const rlt = insertNewDivSection(lay, num + res.count);
        res.html += rlt.html;
        res.count += rlt.count;
    });
    res.html += `</div>`;
    return res;
}
const insertPopNewDivSection = (layout, num) => {
    if (layout.type === 'child') {
        return {
            html: `<div class="${layout.name} grid-number"><div class="num-grey">${num}</div><div class="child close">x</div></div>`,
            count: 1
        };
    }
    else if (layout.type === 'child1') {
        return {
            html: `<div class="${layout.name}"></div>`,
            count: 1
        };
    }
    else if (layout.type === 'parent2') {
        let res = {
            html: `<div class="${layout.name}">${num}`,
            count: 1
        };
        layout.children.forEach((lay, index) => {
            const rlt = insertPopNewDivSection(lay, num);
            res.html += rlt.html;
        });
        res.html += `</div>`;
        return res;
    }
    else if (layout.type === 'parent1') {
        let res = {
            html: `<div class="${layout.name}">`,
            count: 1
        };
        layout.children.forEach((lay, index) => {
            const rlt = insertPopNewDivSection(lay, num);
            res.html += rlt.html;
        });
        res.html += `</div>`;
        return res;
    }
    let res = {
        html: `<div class="${layout.name}">`,
        count: 0
    };
    layout.children.forEach((lay, index) => {
        const rlt = insertPopNewDivSection(lay, num + res.count);
        res.html += rlt.html;
        res.count += rlt.count;
    });
    res.html += `</div>`;
    return res;
}