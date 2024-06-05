import {Button} from "./Button";
import React from "react";


export const ViewAllButton = () => {
    return (
            <Button title={'View All'} color={'rgba(172, 173, 185, 1)'} fontSize={'20px'} fontWeight={500}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.70605 10.0762H15.946" stroke="rgba(172, 173, 185, 1)" stroke-width="1.6055"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M10.3242 4.4574L15.9442 10.0774L10.3242 15.6973" stroke="rgba(172, 173, 185, 1)"
                          stroke-width="1.6055"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>

    )
}

