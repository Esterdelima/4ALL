const obj = require('./data.json');
   
   let cat = obj.categories;
   let prod = obj.products;
   let establis = obj.establishments;
   
   
   cat.forEach((element) => {
       let id = element.id;
       prod.forEach((el) => {
           if (el.categoriesId.find(item => item === id)) {
               element[el.name] = el;
           }
       });
   });
   
   
   let arr = [];
   
   establis.forEach((estab) => {
       let obj = {};
       obj[estab.name] = {}; 
       estab.productsId.forEach(prodId => {
           let product = prod.find(p => p.id === prodId);
           cat.forEach(categ => {
               if (categ[product.name]) {
                   if (obj[estab.name][categ.name]) {
                       obj[estab.name][categ.name][product.name] = {};
                       obj[estab.name][categ.name][product.name]["price"] = categ[product.name].price / 100;
                   }
                   else {
                       obj[estab.name][categ.name] = {};
                       obj[estab.name][categ.name][product.name] = {};
                       obj[estab.name][categ.name][product.name]["price"] = categ[product.name].price / 100;
                   }
                   
               }
           })
       });
       arr.push(obj);
   })
   
   console.log(JSON.stringify(arr));