b = db.products_bak; db.products.find().forEach( function(o){ b.insert(o) } )
// check it worked:
b.count()
// should print 11

homework.a()