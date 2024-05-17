var item = {
    item_name: "Default",
    item_icon: "Default.png",
    item_amount: 1,
    
    add_items: function(amount) {
        this.item_amount += amount;
        display.Update_Inventory()
    },

    remove_items: function(amount) {
        this.item_amount -= amount;
        display.Update_Inventory()
    }
};

var item_list = {
    item_name_list: [

    ],
    item_icon_list: [

    ],
    item_amount_list: [

    ],
    make_item: function(item_name,item_icon) {
        this.item_name_list[item_name] = item_name;

        if(item_icon != null) {
            this.item_icon_list[item_name] = item_icon;
        }
        else {
            this.item_icon_list[item_name] = "images/Default.png";
        }

        this.item_amount_list[item_name] = 1;
    }
};

var display = {
    Update_Inventory: function() {
        document.getElementById("Inventory_Container").innerHTML = "";
        for (i = 0; i < item_list.item_name_list.length; i++) {
            document.getElementById("Inventory_Container").innerHTML += '<table><dl class="item_slot"><dt id="name"><img id="image" src='+item.image[i]+'><p>'+item.name[i]+'</p></dt><dt id="amount"><p><span>'+item.amount[i]+'</span></p></dt></dl></table>';
        }
    }
};

window.onload = function() {
    make_items()
    display.Update_Inventory();
};

var make_items = function() {
    item_list.make_item("IronOre","images/Default.png")
    item_list.make_item("Iron","images/Default.png")
}