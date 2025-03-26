<?php
namespace App\Clases;

use App\Interfaces\InterfazProveedorCorreo;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

class ProveedorMailtrap implements InterfazProveedorCorreo
{
    private $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);
        
        $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;                // Habilita la salida de depuración detallada
        $this->mail->isSMTP();                                      // Establece el tipo de correo electrónico para usar SMTP
        $this->mail->Host = 'smtp.mailtrap.io';                     // Especifica los servidores SMTP principales y de respaldo
        $this->mail->SMTPAuth = true;                               // Habilita la autenticación SMTP
        $this->mail->Username = '6d5fe0c5e3bc17';                   // Nombre de usuario SMTP
        $this->mail->Password = '842639c7630a82';                   // Contraseña SMTP
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Habilita el cifrado TLS; `ssl` también aceptado
        $this->mail->Port = 587;                                    // Puerto TCP para conectarse
    }

    public function enviarCorreo(string $paraQuien, string $asunto, string $cuerpoMensaje): bool
    {
        try {
            $this->mail->setFrom('priveroh01@educantabria.es', 'Paula');
            $this->mail->addAddress($paraQuien);  
            $this->mail->Subject = $asunto;
            $this->mail->Body = $cuerpoMensaje;
            $this->mail->send();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}
