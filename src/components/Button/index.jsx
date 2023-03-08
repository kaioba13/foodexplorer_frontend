import { Container } from "./styles";

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <img src={Icon} alt={title} />}
      {title}
    </Container>
  );
}
