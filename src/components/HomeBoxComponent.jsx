import React from 'react'

const HomeBoxComponent = (props) => {
    return (
        <div className={`home-box  ${props.cls}`}>
            <div className="img-box">
                <img src={props.img} alt="" />
            </div>
            <div className="content">
                <span className='name'>{props.name}</span>
                <span className='number'>{props.number}</span>
                <span className='txt'>{props.per}</span>
            </div>
        </div>
    )
}

export default HomeBoxComponent
