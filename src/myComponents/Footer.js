import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position:"relative", 
        top:"70vh", 
        width:"100%"         
        // margin:"auto 1px"
    }
    return (
        <div style={footerstyle} >
            <p className="bg-dark text-light m-0 p-1">Copyright &copy; myTodosList 2021 &nbsp; | &nbsp; itsArsh</p>
        </div>
    )
}

// position-fixed bottom-0 end-0 start-0 m-0
