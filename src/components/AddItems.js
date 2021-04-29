import React, { useEffect } from 'react';

export const AddItems = ({ fetchAllAPI, isLoading, foods, error }) => {

    useEffect(() => {
        fetchAllAPI();
    }, [])
    console.log(`foods`, foods)
    return (
        <div className="addItems">
            아이템추가!!
            <span data-mce-fragment="1">604 Calories, 56g Protein, 41g Carbs, 24g Fats</span>
        </div>
    )
}
