const sum = require('../sum')

test ('sum 1 + 2 e o resultado', function(){
    expect(sum(1,2)).toBe(4);
});