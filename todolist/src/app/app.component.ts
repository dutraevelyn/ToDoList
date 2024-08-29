import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  tarefa: string = "";
  tarefas: string[] = [];


  adicionar() {
    if (this.tarefa.trim() === "") {
      alert("Coloque uma tarefa!");
      return;
    }

    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }

  remover(index: number) {
    this.tarefas.splice(index, 1);
  }
}
