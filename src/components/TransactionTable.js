import React from "react"
import '../../src/App.css'
import { Table } from "react-bootstrap"
export default function TransactionTable({transactions, onDelete}){

   const handleDelete = (id) => {
          onDelete(id)
   }
    return (
       <>
         <div className="container">
             <Table striped bordered hover responsive>
                <thead>
                  <tr>
                     
                     <th>Description</th>
                     <th>Amount</th>
                     <th>Date</th>
                     <th>Category</th>
                     
                  </tr>
                </thead>
             </Table>
         </div>
       </>
    )
}
