import { useState } from 'react';
import { supabase } from '../utils/supabase';

interface ContactFormData {
  name: string;
  phone: string;
  injury_type: string;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('contact_forms')
        .insert([
          {
            name: data.name,
            phone: data.phone,
            injury_type: data.injury_type,
            message: data.message,
          },
        ]);

      if (submitError) throw submitError;

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, success, error };
};
