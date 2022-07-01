import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
   justify-content: center;
	align-items: center;
   width: 600px;
	height: 100vh;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
   justify-content: center;
	align-items: center;
	padding: 40px;
	width: 100%;
   height: 100vh;
	background: ${props => props.theme.colors.bg_root};
	border-radius: 25px;

	> a {
		font-size: 1.1rem;
      color: #762FE3;
	}

   @media (min-width: 600px) {
	   padding: 0 77px;
      height: 700px;
      background: ${props => props.theme.colors.bg_component};
   }
`;

export const Logo = styled.div`
   margin-bottom: 55px;
   width: 70%;
`;

export const ImageLogo = styled.img`
   width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
   
	input {
		padding: 15px 13px;
      width: 100%;
		font-size: 1.2rem;
		color: ${props => props.theme.colors.text};
		border: 1px ${props => props.theme.colors.input_border} solid;
      border-radius: 7px;

      ::placeholder {
         color: ${props => props.theme.colors.placeholder};
      }

      :focus {
         border-color: #762FE3;
      }
	}

   label {
      margin: 17px 0;

      span {
         display: block;
         margin-top: 5px;
         color: ${props => props.theme.colors.error};
      }
   }
`;