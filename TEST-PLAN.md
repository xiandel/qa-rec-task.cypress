# There are 3 inputs that effect the querying for positions:

    -Title
    -Location
    -Distance from Location

## To test searching by Title:

    -Existing title 'Care Assistant' should yield results
    -Non-existing title should no yield results.

## To test searching by Location

    -Existing location within UK eg. 'Manchester'
    -Non-existing place in UK eg. 'Alderaan'
    -Existing postcode within UK eg. 'SW1A 1AA' (Buckingham Palace, London)
    -Non existing postcode within UK eg. 'AA00 0AA'

## To test searching by Distance

    -Ensure distance does have an effect on a search that contains a valid location but no title (Number of results should increase between lowest and highest distance)
    -Ensure distance does have an effect on a search that contains both a valid title and a valid location (Number of results should increase between lowest and highest distance)
    -Ensure distance has no effect on search that contains a valid Title but does not include a location (Number of results should not increase or decrease when selecting lowest or highest values)
