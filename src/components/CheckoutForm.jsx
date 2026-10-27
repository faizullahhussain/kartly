import Input from './Input';

const CheckoutForm = () => {
  return (
    <div>
      <form className='mb-2 flex flex-col gap-4'>
        <div className='flex gap-4 rounded-md'>
          <Input type='text' name='firstName' placeholder='First name' />
          <Input type='text' name='lastName' placeholder='Last name' />
        </div>

        <div>
          <Input type='email' name='email' placeholder='Email address' />
        </div>

        <div>
          <Input type='text' name='address' placeholder='Streat address' />
        </div>

        <div className='flex gap-4 rounded-md'>
          <Input type='text' name='city' placeholder='City' />
          <Input type='number' name='postalCode' placeholder='Postal Code' />
        </div>

        <div>
          <h2 className='font-bold text-[0.8rem]'>Payment</h2>
        </div>

        <div className='flex gap-4 rounded-md'>
          <Input type='number' name='cardnumber' placeholder='Card number' />
        </div>

        <div className='flex gap-4 rounded-md'>
          <Input type='text' name='monthyear' placeholder='MM / YY' />
          <Input type='number' name='cvc' placeholder='CVC' />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
