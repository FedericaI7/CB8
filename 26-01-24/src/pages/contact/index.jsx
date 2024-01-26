import styles from "../../styles/Contact.module.scss";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.Contact}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          placeholder="firstname"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <p>First name is required.</p>}
        <input
          placeholder="lastname"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p>Last name is required.</p>}
        <input placeholder="age" {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <textarea {...register("message", { required: true })} />
        {errors.message && <p>Message is required.</p>}
        <input type="submit" value="Contact Us" />
      </form>
    </div>
  );
}
