var Costs = (function() {

  function Costs(data) {
    d3.select('#price_last').text( costWithCents(data.location_current.price) );
    d3.select('#per_night_fee').text( costWithCents(data.per_night_fee) );
    d3.select('#per_month_fee').text( costWithCents(data.per_night_fee * 30) );


    price_most_o = data.map_places.sort( function(a,b) { return b.price - a.price })[0];
    d3.select('#price_most_o').text( costWithCents(price_most_o.price) );
    d3.select('#price_most_o_where').html( where(price_most_o) );

    price_most_pp = data.map_places.filter(function(mp) { return mp.category == 'PP'; }).sort( function(a,b) { return b.price - a.price })[0];
    d3.select('#price_most_pp').text( costWithCents(price_most_pp.price) );
    d3.select('#price_most_pp_where').html( where(price_most_pp) );

    price_most_pc = data.map_places.filter(function(mp) { return ((mp.category != 'PP') && (mp.category != 'PL')); }).sort( function(a,b) { return b.price - a.price })[0];
    d3.select('#price_most_pc').text( costWithCents(price_most_pc.price) );
    d3.select('#price_most_pc_where').html( where(price_most_pc) );

    d3.select('#percentage_free_nights').text(formatPercent(data.percentage_free_nights));
    d3.select('#walmart_count').text(data.walmart_count);
    d3.select('#consecutive_free').text(data.consecutive_free);

    data.states.filter( function(d) { return d.cost == 0; }).sort(function(a,b) { return a.state > b.state; }).forEach( function(s) {
      d3.select('#freeStateItems').append('span').attr('class', 'state-icon').html(state_face[s.state]);
    });

  }

  return Costs;
})();
