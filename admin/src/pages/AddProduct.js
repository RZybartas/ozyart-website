import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field } from '../components/Field';
import { Sidebar } from '../components/Sidebar';
import { newProduct } from '../features/products/productsSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isSuccess, isError } = useSelector((state) => state.products);
  const token = user?.token;
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    size: '',
    description: '',
    tags: '',
  });

  const { title, image_url, size, description, tags } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = [
      token,
      {
        title,
        image_url,
        size,
        description,
        tags,
      },
    ];
    dispatch(newProduct(product));
    if (isError) {
      return toast.error("You don't have permissions to add product");
    }
    if (isSuccess) {
      toast.success('Product added');
      navigate('/products');
    }
  };
  return (
    <div>
      <div className='products'>
        <div className='products__sidebar'>
          <Sidebar />
        </div>
        <div className='form-container'>
          <h1 className='title'>Add new product</h1>
          <ToastContainer />
          <form className='form' onSubmit={handleSubmit}>
            <Field
              name='title'
              label='Title:'
              value={title}
              onChange={onChange}
            />
            <Field
              name='image_url'
              type='url'
              label='Image Url:'
              value={image_url}
              onChange={onChange}
            />
            <Field name='size' label='Size:' value={size} onChange={onChange} />
            <div className='textarea'>
              <label htmlFor='textarea'>Description:</label>
              <textarea
                name='description'
                type='textarea'
                value={description}
                onChange={onChange}
              />
            </div>
            <Field name='tags' label='Tags:' value={tags} onChange={onChange} />
            <button type='submit'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
