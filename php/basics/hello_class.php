<?php

class Session
{
    public function read()
    {
        return ['id'=>'1234', 'name'=>'Jason Snider'];
    }
}

class Hello
{
    private $who;

    public function __construct(Session $session)
    {
        $sessionData = $session->read();
        $this->setWho($sessionData['name']);
    }

    public function setWho($who)
    {
        $this->who = $who;
    }

    public function greet($message)
    {
        return "{$message} {$this->who}";
    }
}

$session = new Session();

$greeting = new Hello($session);

$message = 'Good ' .  (date("H")<12?'Morning':(date("H")<17?'Afternoon':'Evening'));

echo $greeting->greet($message);
