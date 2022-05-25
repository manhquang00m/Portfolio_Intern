import React, { Fragment } from 'react'

export default function XucXac(props) {
    return (
        <Fragment>
            <img className='img_xucxac' src={require(`${props.xucXac}`)} alt="" />
        </Fragment>


    )
}
