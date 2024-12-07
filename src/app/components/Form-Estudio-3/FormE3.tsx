export default function FormSection() {
    const fields = [
      "Orden Médica del especialista",
      "Fotocopia del documento de identidad",
      "Consentimiento Informado de FICMAC",
      "Voucher o Bono",
      "Resumen de Historia Clínica",
    ];
  
    return (
      <div className="form-container">
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field}</label>
            <input type="file" accept="image/*,.pdf" />
          </div>
        ))}
        <button type="submit" className="submit-button">Enviar</button>
        <style jsx>{`
          .form-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .form-group {
            margin-bottom: 20px;
          }
          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .submit-button {
            display: block;
            width: 100%;
            padding: 10px;
            background: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
          }
        `}</style>
      </div>
    );
  }
  