import React from 'react'

export const Nutrition = ({ nutritionArr }) => {
    return (
        <div className="Nutrition">
            {
                nutritionArr.map((data, index) => {
                    return (
                        <div key={index}>
                            <div className="nutritionTitle">{Object.keys(data)}</div>
                            <div className="nutritionVal">{Object.values(data)}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
