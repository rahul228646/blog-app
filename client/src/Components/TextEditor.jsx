import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser'
function TextEditor() {

        const [text, setText] = useState('');
        return (
            <div>
                <div className="editor">
                    <CKEditor
                        editor={ ClassicEditor }
                        data={text}
                        onChange={(event, editor)=>{
                            const data = editor.getData()
                            setText(data)
                        }}
                        />
                </div>
                <div>
                    <h2>
                        content
                        <p>{parse(text)}</p>
                    </h2>
                </div>

            </div>
        );
}

export default TextEditor;

