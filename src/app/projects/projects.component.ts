import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  selectedFile: File = null!;
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post(
        'https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile',
        fd
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
