"use client"
import './ItemInfo.css';

const ItemInfo=({title,text,children})=> {
    return (
    <section>
        <div className='containerCard'>
            <div className='cardText' >
                <div className='containerCardh2'>
                    <h2>{title}</h2>
                </div>
                <div className='containerCardText'>
                    <p>{text}</p>
                    {children}
                </div>
            </div>
        </div>
    </section>
);
}

export default ItemInfo;