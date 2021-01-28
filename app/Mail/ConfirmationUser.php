<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ConfirmationUser extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $user;
    public $url;
    public function __construct($user)
    {
        $this->user = $user;
        $this->url = "http://127.0.0.1:8000/confirmUser?email=".$user->email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown("mail.ConfirmationUser")->subject("Confirmar Cuenta")->from("noreply@localhost.com", "Nelson Arevalo");
    }
}
