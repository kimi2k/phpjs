function xmlwriter_write_element (xmlwriter, name, content) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: var xmlwriter = xmlwriter_open_memory();
    // *     example 1: xmlwriter_write_element(xmlwriter, 'div', 'Hello there!');
    // *     returns 1: true
    
    return xmlwriter.writeElement(name, content);
}