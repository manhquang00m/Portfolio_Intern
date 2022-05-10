import React, { Fragment } from 'react'

export default function XucXac(props) {
    return (
        <Fragment>
            {/* <div className='scene'>
                <div className='cube'>
                    <img className='cube__face front' style={{ width: '60px' }} src={require(`${props.xucXac}`)} alt="" />
                    <img className='cube__face back' style={{ width: '60px' }} src={require('./assets/img/ga.png')} alt="" />
                    <img className='cube__face left' style={{ width: '60px' }} src={require('./assets/img/bau.png')} alt="" />
                    <img className='cube__face right' style={{ width: '60px' }} src={require('./assets/img/cua.png')} alt="" />
                    <img className='cube__face bottom' style={{ width: '60px' }} src={require('./assets/img/tom.png')} alt="" />
                    <img className='cube__face top' style={{ width: '60px' }} src={require('./assets/img/ca.png')} alt="" />
                </div>
            </div> */}
            <img className='' style={{ width: '60px' }} src={require(`${props.xucXac}`)} alt="" />
        </Fragment>


    )
}
