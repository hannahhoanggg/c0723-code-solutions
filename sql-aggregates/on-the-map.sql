select "countries"."name", count(*) as "numbersOfCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."name"
order by "numbersOfCities" DESC;
