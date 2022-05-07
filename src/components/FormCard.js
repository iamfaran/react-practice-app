import "./FormCard.css";
import Button from "./Button";

//Return inputs
const FormCard = () => {
  return (
    <form className="card form-card">
      {/* Input 1 */}
      <label htmlFor="">Username</label>
      <input type="text" />
      {/* Input 2 */}
      <label htmlFor="">Age (Years)</label>
      <input type="text" />
      <div className="btn-center">
        <Button></Button>
      </div>
    </form>
  );
};

export default FormCard;
