<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $users = User::all();
     
       return response()
       ->json([
           "status"=> "success",
           "data"=> $users
       ]);//
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
       $user->nombre=$request->nombre;
       $user->apellido=$request->apellido;
       $user->typoId= $request->TypoId;
       $user->sexo=$request->sexo;
       $user->numeroId = $request->numeroId;
       $user->save();    //
    } //
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $users = User::findOrFail($request->id);

        return response()
        ->json([
            "status"=> "success",
            "user"=> $users
        ]);//
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::findOrFail($request->id);
        $user->nombre=$request->nombre;
        $user->apellido=$request->apellido;
        $user->typoId= $request->typoId;
        $user->sexo=$request->sexo;
        $user->numeroId = $request->numeroId;
        $user->save(); 
        return $user;//
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $user= User::destroy($request->id);
      return $user;//
    }
}
