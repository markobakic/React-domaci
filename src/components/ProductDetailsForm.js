import React from 'react';
import '../main.css';
import { useParams } from 'react-router-dom';
import data from '../data';

export default function ProductDetailsForm(props) {
    const {id} = useParams();

    const checked = () => {
        const radios = document.getElementsByName('gender');
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                return radios[i].value;
            }
        }
    }

    const validate = () => {
        const amount = document.getElementById('amount').value;
        const size = document.getElementById('sizes').value;
        if(amount.match(/^[1-9][0-9]*$/) && checked()){
            const product = data.findProduct(id);

            data.cart.push({
                id: data.idCart++,
                name: product.name,
                model: product.model,
                gender: checked(),
                size: size,
                amount: amount,
                price: product.price,
                total: amount * product.price
            });

            console.log(data.cart);
        }else{
            alert('Invalid input. Please try again.')
        }
    }


    const formStyle={
        display:"inline-block",
        
        };

    return (
        <div className='product-details-form' style={formStyle}>
            <form >
                <fieldset className='gender'>
                    <legend>Chose gender</legend>
                    <input type="radio" id="gender-1" name="gender" value="Male"/>
                    <label htmlFor="gender-1">Male</label>
                    <br/>
                    <input type="radio" id="gender-2" name="gender" value="Female"/>
                    <label htmlFor="gender-2">Female</label>
                    <br/>
                   
                </fieldset>

                <div className='amount'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='text' name='amount' id='amount' autoComplete='off'></input>
                </div>

                <div className='size'>  
                    <label htmlFor="sizes">Choose size</label>
                    <select name="sizes" id="sizes">
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                
                    </select>
                </div>

                <button type="button" className='btn' onClick={validate}> Add to cart </button>

            </form>
        </div>
    )
}