import itemBuilder from "./ItemsBuilder";
import { menudata } from "./menuData";

const itemsList = [];

menudata.forEach((item, index)=>{
    itemsList.push(new itemBuilder().SetId(item.id)
    .SetName(item.Name)
    .SetIsVeg(item.isVeg)
    .SetPrice(item.Price)
    .SetIsBestSeller(item.isBestSeller)
    .SetDescription(item.Description)
    .SetImage(item.image)
    .build()
    )
})


console.log(itemsList)

export {itemsList};