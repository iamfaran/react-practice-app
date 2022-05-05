import "./FormCard.css";

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
        <button className="btn">Add User</button>
      </div>
    </form>
  );
};

export default FormCard;
