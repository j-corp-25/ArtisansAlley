import CreationForm from '@/components/CreationForm'

const AddCreationPage = () => {
  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-4xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border'>
          <CreationForm />
        </div>
      </div>
    </section>
  )
}

export default AddCreationPage
