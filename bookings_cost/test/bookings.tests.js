describe('Checking the booking requests to Kamva cattery', function(){

    it ("the function should return 'R135.00' that if called with this parameter", function(){

  var objects = [

{
  check_in_day: 'Monday',
  duration: 3,
  cat_name : 'Snowy'
}
  ]

  var booking = [
    {
      duration: 3,
      check_in_day:'Monday',
      cat_name : 'Snowy'
    }
  ]

 assert.equal( objects,bookingCost(booking))

    })
    it ("the function should return '101.25' that if called with this parameter", function(){

      var objects = [
    
    {
      check_in_day: 'Wednesday',
      duration: 3,
      cat_name : 'Snowy'
    }
      ];
    
      var booking = [ ]
    
     assert.equal( objects,bookingCost(booking))
  
    })
    it ("the function should return '114.75' that if called with this parameter", function(){

      var objects = [
    
    {
      check_in_day: 'Friday',
      duration: 3,
      cat_name : 'Snowy'
    }
      ]
    
      var booking = [ ]
    
     assert.equal( objects,bookingCost(booking))
  
    })
  })





