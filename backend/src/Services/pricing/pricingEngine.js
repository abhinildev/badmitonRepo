import PricingRule from "../../model/pricingRules.js";

export async function calculatePrice(context){
    let totalPrice=0
    const breakdown=[]

    let courtPrice=context.court.basePrice;
    breakdown.push({
        label:"Base court price",
        amount:courtPrice,
    })
    const rules=await PricingRule.findAll({
        where:{isActive: true}
    })
    for (const rule of rules){
        if(
            (rule.resourceType==="COURT" || rule.resourceType==="BOOKING") && ruleApplies(rule,context)
        ){
            const delta=applyModifier(rule,courtPrice)
            courtPrice+=delta
            breakdown.push({
                label:rule.name,
                amount:delta,
            })
        }
    }

  totalPrice += courtPrice
  if (context.equipments?.length) {
    for (const eq of context.equipments) {
      const cost = eq.pricePerSlot * eq.quantity
      totalPrice += cost

      breakdown.push({
        label: `${eq.name} x ${eq.quantity}`,
        amount: cost,
      })
    }
  }
    if(context.coach){
        totalPrice+=context.coach.pricePerSlot
        breakdown.push({
            label:"Coach fee",
            amount:context.coach.pricePerSlot
        })
    }
    return {
        totalPrice,
        breakdown
    }
}