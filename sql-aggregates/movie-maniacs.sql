select "firstName", "lastName", sum("amount") as "totalAmountPaid"
from "customers"
join "payments" using ("customerId")
group by "firstName", "lastName"
order by "totalAmountPaid" DESC
