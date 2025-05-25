import useSmoothScrollTo from '../hooks/useSmoothScrollTo';

const Register = () => {
    const regBind = useSmoothScrollTo('#register');
  return (
    <div className='registerButtonContainer' {...regBind}>
    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScSlgu3YroZbGOMRzWjPBNcuslHPdkq5Hy4YcuTQ3IDcWupHA/viewform" */}
    <a
    >Registrations Closed</a>
</div>
  )
}

export default Register