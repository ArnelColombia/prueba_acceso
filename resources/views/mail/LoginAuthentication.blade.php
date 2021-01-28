@component("mail::message")
# Su Código de verificacion es:
# {{ $code ?? 'aeiou' }}

Gracias,<br/> 
{{ config('app.name') }}
@endcomponent