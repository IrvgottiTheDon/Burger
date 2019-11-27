var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(colVals, condition, cb) {
		orm.updateOne("burgers", colVals, condition, function(res) {
			cb(res);
		});
	}
};

const devourBurger = $("li.list-group-item")
devourBurger.each(function () {
    
    const element = $(this)
    const btn = element.find(".btn-devour")
    const name = element.find(".burger_name").text()
    btn.click(function (event) {
        event.preventDefault();
        let spacefix = name.trim();
       


        $.ajax("/" + spacefix, {
            type: "PUT",
            
        })
            .then(function (resp) {
                location.reload()
            })
            .catch(function (err) {
                console.log(err)
            })
    })
})

module.exports = burger;