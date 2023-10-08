describe("Http request: ",()=>{
  it("Get call",()=>{
      cy.request('Get','https://reqres.in/api/users?page=1')
      .its('status')
      .should('equal',200);
  })

  it("Post call",()=>{
      cy.request({
                method :'Post',
                url: 'https://reqres.in/api/users',
                body:{
                  "name": "Jubear Jabber Jetu",
                  "job": "Unemployed"
                }

                })
      
  })

  it("Put call",()=>{
    cy.request({
              method :'Put',
              url: 'https://reqres.in/api/users/2',
              body:{
                "name": "Jubear Jabber Jetu",
                "job": "Employed"
              }

               })
   
    })

    it("Patch call",()=>{
      cy.request({
                method :'Patch',
                url: 'https://reqres.in/api/users/2',
                body:{
                  "name": "Jubear Jabber Jetu",
                  "job": "Employed"
                }
  
                 })
     
      })

    it("Delete call",()=>{
      cy.request({
                method :'Delete',
                url: 'https://reqres.in/api/users/2'
                 })
     
      })
})

