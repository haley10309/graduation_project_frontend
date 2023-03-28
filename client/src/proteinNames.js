import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class proteinName extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.protein}</TableCell>
               
            </TableRow>
        )
    }
}

export default proteinName;