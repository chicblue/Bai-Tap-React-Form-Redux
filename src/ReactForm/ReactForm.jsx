import React, { Component } from 'react'
import CreateStudent from './CreateStudent';
import {connect} from 'react-redux';
import {delStudent} from '../redux/reducers/infoReducer';
import {editStudent} from '../redux/reducers/studentReducer';
 class ReactForm extends Component {
    delStudent=(idDel)=>{
       const action = delStudent(idDel)
       this.props.dispatch(action);
    };
    editStudent=(stud)=>{
       const action = editStudent(stud)
       this.props.dispatch(action);
    }

  render() {
    let {infoReducer} =this.props;
    

    return (
        <div className='container'>
        <CreateStudent />
        <table className='table mt-2'>
            <thead className='bg-dark text-white fw-bold'>
                <tr>
                    <th>Mã Sinh Viên</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {infoReducer.arrStudent.map((prod) => {
                    return <tr key={prod.idStudent}>
                        <td>{prod.idStudent}</td>
                        <td>{prod.name}</td>
                        <td>{prod.phone}</td>
                        <td>{prod.email}</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>{
                                 this.editStudent(prod)
                            }}>Edit</button>
                            <button className='btn btn-danger' onClick={() => {
                                this.delStudent(prod.idStudent);
                            }}>Del</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
    )
  }
}
const mapStateToProps = (state ) =>{
    return state ;
}
const  ComponentWithReDux = connect (mapStateToProps)(ReactForm)
export default ComponentWithReDux;
