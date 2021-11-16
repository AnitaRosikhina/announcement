import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IAnnouncement} from "./annoucement.model";

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {

  form: FormGroup
  blogs: IAnnouncement[] = []
  editedId: string;
  check = true
  search = ''

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  get postId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  submit(): void {
    this.blogs.push({
      ...this.form.value,
      date: new Date(),
      id: this.postId
    })
    this.resetForm()
  }

  delete(index: number): void {
    this.blogs.splice(index, 1)
  }

  edit({id, title, description}): void {
    this.editedId = id
    this.form.setValue({
      title: title,
      description: description
    })
    this.check = false
  }

  update(): void {
    const index = this.blogs.findIndex(element => element.id === this.editedId)
    this.blogs[index] = {
      ...this.form.value,
      id: this.editedId,
      date: new Date(),
    }
    this.check = true
    this.resetForm()
  }

  resetForm(): void {
    this.form.reset()
    for (const controlName in this.form.controls) {
      this.form.get(controlName).setErrors(null)
    }
    this.form.setErrors({'initialState': true})
  }
}
