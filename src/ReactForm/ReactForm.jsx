import React, { Component } from 'react'
import CreateStudent from './CreateStudent';
import {connect} from 'react-redux';
import infoReducer from '../redux/reducers/infoReducer';
 class ReactForm extends Component {
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
                                this.setState({
                                    productEdit: prod
                                })
                            }}>Edit</button>
                            <button className='btn btn-danger' onClick={() => {
                                this.delProduct(prod.idProduct);
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
