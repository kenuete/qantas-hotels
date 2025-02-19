import Swal from 'react-sweetalert2'

const ErrorModal = () => {
  return (
    <Swal
      show={true}
      icon='error'
      title='Oops...'
      text='Something went wrong!'
      confirmButtonText='Reload'
      onConfirm={() => {
        window.location.reload()
      }}
    />
  )
}

export default ErrorModal
